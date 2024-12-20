import './style.css'

interface SubmitButtonProps {
  label: string;
}

const Index: React.FC<SubmitButtonProps> = ({label}) => {
  return (
    <button type="submit" className="submit-button">
      {label}
    </button>
  )
}

export default Index;
