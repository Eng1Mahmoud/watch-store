import Image from "next/image";
import { ITableProps } from "@/types/types";
import { formatDate } from "@/utils/numberFormat";
import { useLocale } from "next-intl";
import { imageKeys } from "@/utils/imageKeys"; // get image keys from utils to check if the column is an image
const BaseTable: React.FC<ITableProps> = ({ data, columns, actions }) => {
  const loacle = useLocale();
  const getNestedValue = (obj: any, path: string) => {
    // get nested value from object
    const value = path
      .split(/[[\].]+/)
      .filter(Boolean)
      .reduce((acc, key) => acc?.[key], obj);

    // Check if the value is a date (for the key `created_at` or others)
    if (path === "created_at" && value) {
      return formatDate(value, loacle);
    }

    return value || "__"; // Default fallback
  };
  return (
    <div className="overflow-x-auto p-1 ">
      <table className="min-w-full divide-y divide-gray-200 shadow-custom dark:shadow-dark ">
        <thead className="bg-gray-50 dark:bg-dark-bgSection">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={`text-center font-medium ${column.labelColor ? column.labelColor : "text-gray-500"} capitalize w-fit whitespace-nowrap dark:text-dark-text`}
              >
                {column.label}
              </th>
            ))}
            {actions &&
              actions.map((action, actionIndex) => (
                <th
                  key={actionIndex}
                  scope="col"
                  className={`text-center font-medium ${action.labelColor ? action.labelColor : "text-gray-500"} capitalize w-fit whitespace-nowrap`}
                >
                  <button
                    className={`btn bg-transparent hover:bg-transparent border-none shadow-none ${action.labelColor}`}
                  >
                    {action.icon && <action.icon className="text-lg" />}
                    {action.label}
                  </button>
                </th>
              ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item: any, index: number) => (
            <tr key={index}>
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="px-6 text-center py-4 whitespace-nowrap dark:text-dark-text dark:bg-dark-bgSection"
                >
                  {imageKeys.includes(column.key) ? (
                    <div className="flex justify-center">
                      <Image
                        src={getNestedValue(item, column.key)}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="w-10 h-10 object-cover rounded-full"
                      />
                    </div>
                  ) : Array.isArray(item[column.key]) ? (
                    <div>
                      {item[column.key].map((value: any, index: number) => (
                        <span key={index} className="mr-1">
                          {value}
                          {index <
                            getNestedValue(item, column.key).length - 1 &&
                            " - "}
                        </span>
                      ))}
                    </div>
                  ) : (
                    getNestedValue(item, column.key)
                  )}
                </td>
              ))}
              {actions &&
                actions.map((action, actionIndex) => (
                  <td
                    key={actionIndex}
                    className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center dark:text-dark-text dark:bg-dark-bgSection"
                  >
                    <button
                      onClick={() => action.onClick(item)}
                      className={`btn bg-transparent hover:bg-transparent border-none shadow-none ${action.labelColor}`}
                    >
                      {action.icon && <action.icon className="text-lg" />}
                      {action.label}
                    </button>
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BaseTable;
