const StatusFilter = ({ statusFilter, onSetStatusFilter, options }) => {
  return (
    <div className="mb-2">
      {options.map((status) => (
        <button
          key={status}
          onClick={() => onSetStatusFilter(status)}
          className={`${status === statusFilter ? `bg-gray-700 text-white` : `text-gray-600 border border-gray-200 hover:bg-gray-50`} mr-2 px-3 py-1 rounded-lg text-xs font-medium transition-colors`}
        >
          {status}
        </button>
      ))}
    </div>
  );
};

export default StatusFilter;
