const AddTrialForm = ({ onAddTrial }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const newTrial = {
      id: formData.get("id"),
      name: formData.get("name"),
      phase: formData.get("phase"),
      status: formData.get("status"),
      disease: formData.get("disease"),
    };

    onAddTrial(newTrial);

    // Reset all native DOM inputs back to default values
    event.target.reset();
  };

  // styling variables
  const labelStyle = "text-xs font-semibold text-gray-600";
  const inputStyle =
    "rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600";

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 grid grid-cols-2 gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm lg:grid-cols-5"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="trial-id" className={labelStyle}>
          Trial id
        </label>
        <input type="text" id="trial-id" name="id" className={inputStyle} />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="name" className={labelStyle}>
          Trial Name
        </label>
        <input type="text" name="name" id="name" className={inputStyle} />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="phase" className={labelStyle}>
          Phase
        </label>
        <select name="phase" id="phase" className={inputStyle}>
          <option value="Phase I">Phase I</option>
          <option value="Phase II">Phase II</option>
          <option value="Phase III">Phase III</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="status" className={labelStyle}>
          Status
        </label>
        <select name="status" id="status" className={inputStyle}>
          <option value=""></option>
          <option value="Active">Active</option>
          <option value="Pending">Pending</option>
          <option value="Suspended">Suspended</option>
          <option value="Hold">Hold</option>
          <option value="Closed">Closed</option>
          <option value="Terminated">Terminated</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="disease" className={labelStyle}>
          Disease
        </label>
        <input type="text" name="disease" id="disease" className={inputStyle} />
      </div>

      <button
        type="submit"
        className="col-span-2 rounded-lg bg-gray-900 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-gray-700 lg:col-span-5"
      >
        Add Trial
      </button>
    </form>
  );
};

export default AddTrialForm;
