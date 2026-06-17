import { useState, useEffect } from "react";
import { fetchNotifications } from "../api/notifications";

export function useNotifications() {
  const [notifications, setNotifications] =
    useState([]);

  const [totalPages, setTotalPages] =
    useState(1);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);

        const data =
          await fetchNotifications();

        setNotifications([
  {
    id: 1,
    title: "TCS Placement Drive",
    message: "Placement drive scheduled tomorrow",
    type: "Placement",
    read: false,
  },
  {
    id: 2,
    title: "Semester Results",
    message: "Results have been published",
    type: "Result",
    read: true,
  },
  {
    id: 3,
    title: "Hackathon Event",
    message: "Registration is now open",
    type: "Event",
    read: false,
  },
]);

setTotalPages(1);

        setTotalPages(
          data.totalPages ?? 1
        );
      } catch (err) {
        setError(
          err?.message ??
            "Failed to fetch notifications"
        );
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return {
    notifications,
    totalPages,
    loading,
    error,
  };
}