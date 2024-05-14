"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react";

interface WebSocketContextType {
  socket: WebSocket | null;
  data: Record<string, any>;
  sendMessage: (msg: string) => void;
}

const WebSocketContext = createContext<WebSocketContextType | undefined>(
  undefined
);

interface WebSocketProviderProps {
  children: ReactNode;
}

export const WebSocketProvider: React.FC<WebSocketProviderProps> = ({
  children,
}) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [data, setData] = useState<Record<string, any>>({});
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const url = "wss://ws-feed.exchange.coinbase.com";
    socketRef.current = new WebSocket(url);
    setSocket(socketRef.current);

    socketRef.current.onopen = () => {
      const subscribeMessage = {
        type: "subscribe",
        product_ids: ["ETH-USD", "BTC-USD"],
        channels: ["ticker_batch"],
      };
      socketRef.current?.send(JSON.stringify(subscribeMessage));
    };

    socketRef.current.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);
      console.log(receivedData);
      if (receivedData.type === "ticker" && receivedData.product_id) {
        setData((prevData) => ({
          ...prevData,
          [receivedData.product_id]: receivedData,
        }));
      }
    };

    socketRef.current.onerror = (error) => {
      console.error("WebSocket Error:", error);
    };

    socketRef.current.onclose = (event) => {
      console.error("WebSocket closed:", event);
      setSocket(null);
    };

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);

  const sendMessage = (msg: string) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(msg);
    } else {
      console.error(
        "WebSocket is not open. ReadyState:",
        socketRef.current?.readyState
      );
    }
  };

  return (
    <WebSocketContext.Provider value={{ socket, data, sendMessage }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = (): WebSocketContextType => {
  const context = useContext(WebSocketContext);
  if (context === undefined) {
    throw new Error("useWebSocket must be used within a WebSocketProvider");
  }
  return context;
};
