import {
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

export function NotificationCard({
  notification,
}) {
  return (
    <Card elevation={2}>
      <CardContent>
        <Stack spacing={1}>
          <Typography
            variant="h6"
            fontWeight={600}
          >
            {notification.title ??
              "Notification"}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            {notification.message ??
              "No message available"}
          </Typography>

          <Chip
            label={
              notification.type ??
              "General"
            }
            size="small"
            color="primary"
            sx={{ width: "fit-content" }}
          />
        </Stack>
      </CardContent>
    </Card>
  );
}