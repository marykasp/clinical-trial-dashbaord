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
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="id">Trial Id</label>
      <input type="text" name="id" id="id" />

      <label htmlFor="name">Trial Name</label>
      <input type="text" name="name" id="name" />

      <label htmlFor="phase">Phase</label>
      <input type="text" name="phase" id="phase" />

      <label htmlFor="status">Status</label>
      <select name="status" id="status">
        <option value="active">Active</option>
        <option value="pending">Pending</option>
        <option value="suspended">Suspended</option>
        <option value="hold">Hold</option>
        <option value="closed">Closed</option>
        <option value="terminated">Terminated</option>
      </select>

      <label htmlFor="disease">Disease</label>
      <input type="text" name="disease" id="disease" />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddTrialForm;
