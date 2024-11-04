import { useTranslations } from "next-intl";

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
  const t = useTranslations("loadingButton");
  return (
    <div className={`flex justify-${position} mt-5`}>
      <button
        type="submit"
        className={`btn btn-primary  px-10 ${fullWidth ? "w-full" : "w-fit"}`}
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <span className="loading loading-spinner" />
            {t("loading")}
          </div>
        ) : (
          text
        )}
      </button>
    </div>
  );
};

export default SubmitButton;
