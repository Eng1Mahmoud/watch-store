"use client";
import { useQuery } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { formatCurrency } from "@/utils/numberFormat";
import Image from "next/image";
import { useLocale } from "next-intl";

export const OrderUI = ({ id }: { id: string }) => {
  const locale = useLocale();
  const { data: order, isLoading } = useQuery({
    queryKey: ["admin-order-details", id],
    queryFn: async () => {
      const response = await axiosClientInstance.get(`/orders/${id}`);
      return response.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Order Details</h1>

      {/* Order Summary Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Order ID:</span>
              <span className="font-medium">{order.id}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Order Date:</span>
              <span className="font-medium">
                {new Date(order.created_at).toLocaleDateString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Status:</span>
              <span
                className="px-3 py-1 rounded-full text-sm font-medium capitalize
                {order.shipment_status === 'preparing' ? 'bg-yellow-100 text-yellow-800' : 
                 order.shipment_status === 'shipped' ? 'bg-blue-100 text-blue-800' : 
                 'bg-green-100 text-green-800'}"
              >
                {order.shipment_status}
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Payment Status:</span>
              <span
                className={`font-medium ${order.is_paid ? "text-green-600" : "text-red-600"}`}
              >
                {order.is_paid ? "Paid" : "Unpaid"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Amount:</span>
              <span className="font-bold text-lg">
                {formatCurrency(order.price, locale)}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Order Items */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Order Items</h2>
        <div className="space-y-4">
          {order.order_items?.map((item: any) => (
            <div
              key={item.product.id}
              className="flex items-center gap-4 border-b pb-4"
            >
              <Image
                src={item.product.image_url}
                alt={item.product.name}
                width={100}
                height={100}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="font-medium">{item.product.name}</h3>
                <p className="text-sm text-gray-600">
                  {item.product.description}
                </p>
                <div className="mt-2 flex justify-between">
                  <span className="text-gray-600">Price:</span>
                  <span className="font-medium">
                    {formatCurrency(item.product.price, locale)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
