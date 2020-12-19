import { useState, useEffect } from 'react';

import * as serviceWorker from '../serviceWorker'; // TODO 'serviceWorker'

export const useUpdates = () => {
  const [loading, setLoading] = useState(false);
  const [showReload, setShowReload] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(
    null
  );

  useEffect(() => {
    const onSWUpdate = (registration: ServiceWorkerRegistration) => {
      setShowReload(true);

      setWaitingWorker(registration.waiting);
    };

    serviceWorker.register({ onUpdate: onSWUpdate });
  }, []);

  const reloadPage = () => {
    waitingWorker?.postMessage({ type: 'SKIP_WAITING' });

    setShowReload(false);

    window.location.reload();
  };

  const applyUpdate = () => {
    setLoading(true);

    reloadPage();
  };

  return { applyUpdate, showReload, loading };
};
