export default function SuccessAlert({ message }) {
    return (
      <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50">
        <p className="italic">{message}</p>
      </div>
    );
  }
  