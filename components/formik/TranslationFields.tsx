import { useTranslations } from "next-intl";
import Input from "@/components/formik/Input";
import { langs } from "@/utils/translationLang";

interface TranslationField {
  name: string;
  label: string;
}

interface TranslationFieldsProps {
  fieldName: string;
  fields: TranslationField[];
}

const TranslationFields = ({ fieldName, fields }: TranslationFieldsProps) => {
  const t = useTranslations("translationFields");

  return (
    <>
      {langs.map(({ value }) => (
        <div
          key={value}
          className="space-y-4 shadow-custom dark:shadow-dark p-3 rounded-md"
        >
          <h3 className="text-center text-main-main dark:text-dark-text font-bold">
            {t("translation")} {t(`languages.${value}`)}
          </h3>
          {fields.map((field) => (
            <Input
              key={field.name}
              name={`${fieldName}.${field.name}.${value}`}
              placeholder={`${field.label} ${t(`languages.${value}`)}`}
              type="text"
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default TranslationFields;
