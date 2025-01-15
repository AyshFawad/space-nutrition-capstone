import { useEffect, useState } from "react";
import './WaterReminder.scss';

function WaterReminder() {
  const [isReminderSet, setIsReminderSet] = useState(false); // Tracks if the reminder has been set
  const [isReminderDismissed, setIsReminderDismissed] = useState(false); // Tracks if user has dismissed the reminder

  // Function to check if it's time for the watering reminder
  const checkWateringReminder = () => {
    // If reminder is not dismissed, show the reminder
    if (!isReminderDismissed) {
      setIsReminderSet(true); // Show the reminder
    }
  };

  // Function to handle user acknowledging the reminder
  const handleReminderDismiss = () => {
    setIsReminderDismissed(true); // User dismissed the reminder
  };

  useEffect(() => {
    // Initial check when the component mounts
    checkWateringReminder();

    // Set an interval to check every 1 minute if the reminder is due
    const intervalId = setInterval(() => {
      // Reset dismissal status and show reminder again
      setIsReminderDismissed(false); // This allows reminder to show again
      checkWateringReminder();
    }, 1 * 60 * 1000); // Check every 1 minute

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [isReminderDismissed]);
  return (
    <div className="water-reminder">
      {isReminderSet && !isReminderDismissed && (
        <div className="reminder-box">
          <p><strong>Reminder:</strong> Time to water your plants! 🌱💧</p>
          <button onClick={handleReminderDismiss}>OK</button>
        </div>
      )}
    </div>
  );
}

export default WaterReminder;
