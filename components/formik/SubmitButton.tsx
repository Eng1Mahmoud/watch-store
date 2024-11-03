interface SubmitButtonProps {
  loading: boolean;
  text: string;
  position: "center" | "start" | "end";
  fullWidth?: boolean;
}

const SubmitButton = ({
  loading,
  text,
  position,
  fullWidth,
}: SubmitButtonProps) => {
  return (
    <div className={`flex justify-${position} mt-5`}>
      <button
        type="submit"
        className={`btn btn-primary  px-10 ${fullWidth ? "w-full" : "w-fit"}`}
      >
        {loading ? <span className="loading loading-spinner"></span> : text}
      </button>
    </div>
  );
};

export default SubmitButton;
