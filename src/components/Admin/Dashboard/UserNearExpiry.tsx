const usersData = [
  {
    userId: "1739",
    email: "demo1@gmail.com",
    mobile: "9876543210",
    name: "demo1",
    role: "User",
    expiryDate: "2025-11-17 02:00 PM",
  },
  {
    userId: "1774",
    email: "demo2@gmail.com",
    mobile: "9876543210",
    name: "demo2",
    role: "User",
    expiryDate: "2025-10-16 12:00 PM",
  },
]

export function UsersNearExpiry() {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="bg-indigo-600 text-white px-4 py-3">
        <h2 className="text-lg font-semibold">Users Near Expiry</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-purple-400 text-white text-sm">
              <th className="px-4 py-3 text-center font-medium">UserID</th>
              <th className="px-4 py-3 text-center font-medium">EmailId</th>
              <th className="px-4 py-3 text-center font-medium">Mobile Number</th>
              <th className="px-4 py-3 text-center font-medium">Name</th>
              <th className="px-4 py-3 text-center font-medium">Role</th>
              <th className="px-4 py-3 text-center font-medium">Expiry Date</th>
              <th className="px-4 py-3 text-center font-medium">Apply Coupon</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="px-4 py-3 text-center text-gray-700">{user.userId}</td>
                <td className="px-4 py-3 text-center text-gray-700">{user.email}</td>
                <td className="px-4 py-3 text-center text-gray-700">{user.mobile}</td>
                <td className="px-4 py-3 text-center text-gray-700">{user.name}</td>
                <td className="px-4 py-3 text-center text-gray-700">{user.role}</td>
                <td className="px-4 py-3 text-center text-red-500">{user.expiryDate}</td>
                <td className="px-4 py-3 text-center">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">Apply Coupon</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default UsersNearExpiry