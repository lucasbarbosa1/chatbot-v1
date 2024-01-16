import { streamToResponse } from "ai";
import { Request, Response } from "express";
import { ChatMessage, MessageContent, OpenAI } from "llamaindex";
import { createChatEngine } from "./engine";
import { LlamaIndexStream } from "./llamaindex-stream";

const getLastMessageContent = (
  textMessage: string,
): MessageContent => {
  return textMessage;
};

export const chat = async (req: Request, res: Response) => {
  try {
    const { messages, data }: { messages: ChatMessage[]; data: any } = req.body;
    const lastMessage = messages.pop();
    if (!messages || !lastMessage || lastMessage.role !== "user") {
      return res.status(400).json({
        error:
          "As mensagens são necessárias no body da requisição e a última mensagem deve ser do usuário",
      });
    }

    const llm = new OpenAI({
      model: process.env.MODEL,
    });

    const chatEngine = await createChatEngine(llm);

    const lastMessageContent = getLastMessageContent(
      lastMessage.content,
    );

    const response = await chatEngine.chat(
      lastMessageContent as MessageContent,
      messages,
      true,
    );

    // Transforma a resposta em texto legível.
    const stream = LlamaIndexStream(response);

    streamToResponse(stream, res);
  } catch (error) {
    console.error("[LlamaIndex]", error);
    return res.status(500).json({
      error: (error as Error).message,
    });
  }
};
