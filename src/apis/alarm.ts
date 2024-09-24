type AlarmResponse = {
    successCount : number,
    failureCount : number,
    errors : string[]
}

export const subscribeToTopic = async (token: string, topic: string) => {
  const response = await fetch(
    import.meta.env.VITE_SERVER_ENDPOINT + "subscribe",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, topic }),
    }
  );
  const data = await response.json();
  return data as AlarmResponse;
};

export const unsubscribeFromTopic = async (token: string, topic: string) => {
  const response = await fetch(
    import.meta.env.VITE_SERVER_ENDPOINT + "unsubscribe",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, topic }),
    }
  );
  const data = await response.json();
  return data as AlarmResponse;
};

export async function handleAllowNotification() {
  const permission = await Notification.requestPermission();
  return permission;
}
