const Badge = ({ status }) => {
  let color;

  const needsAttention =
    status.toLowerCase() === "hold" || status.toLowerCase() === "suspended";

  switch (status.toLowerCase()) {
    case "pending":
      color = `bg-gray-100 text-gray-600`;
      break;
    case "active":
      color = `bg-emerald-100 text-emerald-700`;
      break;
    case "suspended":
      color = "bg-amber-100 text-amber-700";
      break;
    case "hold":
      color = "bg-orange-100 text-orange-700";
      break;
    case "closed":
      color = "bg-indigo-100 text-indigo-700";
      break;
    case "terminated":
      color = "bg-red-100 text-red-700";
      break;
    default:
      color = `bg-gray-200 text-gray-700`;
  }

  return (
    <span
      className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${color}`}
    >
      {needsAttention && (
        <span aria-hidden="true" className="mr-1">
          ⚠
        </span>
      )}
      {status}
    </span>
  );
};

export default Badge;
