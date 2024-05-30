import { FaRegFaceFrown } from 'react-icons/fa6';

export default function ErrorMessage() {
  return (
    <div>
      <p>
        Something went wrong! Please, reload the page!
        <FaRegFaceFrown />
      </p>
    </div>
  );
}
