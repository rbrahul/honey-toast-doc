# Usage with React.js

This page demonstrates how to use Honey Toast with React.js.
Check out the live Demo of [Honey Toast + React in Slackblitz](https://stackblitz.com/edit/vitejs-vite-aqrxffeo?file=src%2FApp.jsx).

## Integration



```js
import toast from 'honey-toast';
import 'honey-toast/dist/style.css';

function App() {
  const toastRef = useRef();

  const showNotification = () => {
    toastRef.current = toast.notify('Hi There!');
  };

  const closeNotification = () => {
    if (toastRef?.current) {
      toastRef.current?.closeAll();
    }
  };

  return (
    <>
      <h1 className="title">Honey Toast + React</h1>
      <div className="card">
        <button onClick={showNotification}>
          Show Notification
        </button>
        <button onClick={closeNotification}>
          Close
        </button>
      </div>
    </>
  );
}
```

