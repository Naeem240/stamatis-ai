import { useState } from "react";

export function useFormSubmit(formId) {
  const [state, setState] = useState({
    submitting: false,
    succeeded: false,
    error: null,
  });

  const handleSubmit = async (e, customSubject) => {
    e.preventDefault();
    setState({ ...state, submitting: true });

    const formData = new FormData(e.target);
    
    // This adds your "Appropriate Heading" to the email subject
    formData.append("_subject", customSubject);

    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      setState({ submitting: false, succeeded: true, error: null });
    } else {
      setState({ submitting: false, succeeded: false, error: "Submission failed." });
    }
  };

  return [state, handleSubmit];
}