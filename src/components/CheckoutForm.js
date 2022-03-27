import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router";

function CheckoutForm({ order }) {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/complete",
      },
    });
    if (result.error) {
      console.log(result.error.message);
    } else {
      navigate("/complete");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={!stripe}>Submit</button>
    </form>
  );
}
export default CheckoutForm;
