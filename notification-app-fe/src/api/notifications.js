const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJnbWthbWVzaDExQGdtYWlsLmNvbSIsImV4cCI6MTc4MTY3NzAyNCwiaWF0IjoxNzgxNjc2MTI0LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZjAzYjM2NjMtOWQ2My00MzZhLThmOWItNDAwZTgzYWM3YzRhIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoia2FtZXNoIGciLCJzdWIiOiJhMjMxNDM4OS00ZTdiLTQ2ODctOTk1ZS05ZDM1MmJiZjAyNjQifSwiZW1haWwiOiJnbWthbWVzaDExQGdtYWlsLmNvbSIsIm5hbWUiOiJrYW1lc2ggZyIsInJvbGxObyI6IjEyOTQxIiwiYWNjZXNzQ29kZSI6Imp1RnBodiIsImNsaWVudElEIjoiYTIzMTQzODktNGU3Yi00Njg3LTk5NWUtOWQzNTJiYmYwMjY0IiwiY2xpZW50U2VjcmV0IjoiQXJ5Q2dXZHhaQVhmbVFtSiJ9.fRCQqFp1zsxDc6X2VF4AUV_HGopBMGRFj3weed0-sFw";

const BASE_URL =
  "http://4.224.186.213/evaluation-service";

export async function fetchNotifications(
  page = 1,
  limit = 10
) {
  try {
    const response = await fetch(
      `${BASE_URL}/notifications?page=${page}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `HTTP Error: ${response.status}`
      );
    }

    const data = await response.json();

    return {
      notifications:
        data.notifications ?? data ?? [],
      totalPages:
        data.totalPages ?? 1,
    };
  } catch (error) {
    console.error(
      "Failed to fetch notifications:",
      error
    );

    return {
      notifications: [],
      totalPages: 1,
    };
  }
}