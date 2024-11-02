import React from 'react'
import { useFormStatus } from 'react-dom';

function SubmitButton() {
    const {pending} = useFormStatus();
  return (
      <div className="text-center my-8">
        <button
          className="bg-green-600 text-white font-bold py-4 px-12 rounded-full shadow-lg hover:bg-green-500"
          type="submit" disabled={pending}
        >
         {pending? 'Submitting..' :  'Submit & Accept Fellowship'}
        </button>
      </div>
  );
}

export default SubmitButton