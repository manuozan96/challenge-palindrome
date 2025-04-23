interface Props {
    type?: 'success' | 'error';
    message: string;
  }
  
  export default function Alert({ type = 'error', message }: Props) {
    const color = type === 'success' ? 'green' : 'red';
  
    return (
      <div className={`p-3 border-l-4 border-${color}-500 bg-${color}-100 text-${color}-800 rounded`}>
        {message}
      </div>
    );
  }
  