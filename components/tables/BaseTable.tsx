import Image from "next/image";
import { ITableProps } from "@/types/types";
const BaseTable: React.FC<ITableProps> = ({ data, columns, actions }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={`text-center font-medium ${column.labelColor ? column.labelColor : "text-gray-500"} capitalize w-fit whitespace-nowrap`}
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
                  className="px-6 text-center py-4 whitespace-nowrap"
                >
                  {column.key === "cover_url" || column.key === "image_url" ? (
                    <div className="flex justify-center">
                      <Image
                        src={item[column.key]}
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
                          {index < item[column.key].length - 1 && " - "}
                        </span>
                      ))}
                    </div>
                  ) : (
                    item[column.key] || "__"
                  )}
                </td>
              ))}
              {actions &&
                actions.map((action, actionIndex) => (
                  <td
                    key={actionIndex}
                    className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center"
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
