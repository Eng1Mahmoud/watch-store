const SubmitButton = ({ loading }: { loading: boolean }) => {
  return (
    <div className="flex justify-center mt-5">
      <button type="submit" className="btn btn-primary w-fit px-10">
        {loading ? "Loading..." : "Login"}
      </button>
    </div>
  );
};

export default SubmitButton;
