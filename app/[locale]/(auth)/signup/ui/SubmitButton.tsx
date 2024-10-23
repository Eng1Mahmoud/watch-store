const SubmitButton = ({ loading }: { loading: boolean }) => {
  return (
    <div className="flex justify-center mt-8">
      <button type="submit" className="btn btn-primary w-fit px-10 font-bold">
        {loading ? "Loading..." : "Register"}
      </button>
    </div>
  );
};

export default SubmitButton;
