"use client";

export interface ChatInputProps {
  /** Valor atual da entrada */
  input?: string;
  /** Controlar o valor da entrada. */
  handleInputChange?: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  /**Resetar o texto da entrada automaticamente */
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  multiModal?: boolean;
}

export default function ChatInput(props: ChatInputProps) {
  return (
    <>
      <form
        onSubmit={props.handleSubmit}
        className="flex items-start justify-between w-full max-w-5xl p-4 bg-red-700 rounded-xl shadow-xl gap-4"
      >
      <input
        autoFocus
        name="message"
        placeholder="Digite aqui sua dúvida sobre a UFOP"
        className="w-full p-4 text-xl text-black bg-white rounded-xl shadow-inner flex-1"
        value={props.input}
        onChange={props.handleInputChange}
      />
        <button
          disabled={props.isLoading}
          type="submit"
          className="p-4 text-white text-xl rounded-xl shadow-xl bg-gradient-to-r from-red-800 to-orange-900 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Enviar
        </button>
      </form>
    </>
  );
}
