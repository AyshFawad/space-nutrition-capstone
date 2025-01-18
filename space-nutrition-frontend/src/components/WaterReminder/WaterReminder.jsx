import { useEffect, useState } from "react";
import './WaterReminder.scss';

function WaterReminder() {
  const [isReminderSet, setIsReminderSet] = useState(false); 
  const [isReminderDismissed, setIsReminderDismissed] = useState(false); 

 
  const checkWateringReminder = () => {
   
    if (!isReminderDismissed) {
      setIsReminderSet(true); 
    }
  };

  
  const handleReminderDismiss = () => {
    setIsReminderDismissed(true); 
  };

  useEffect(() => {
    
    checkWateringReminder();

    
    const intervalId = setInterval(() => {
      
      setIsReminderDismissed(false); 
      checkWateringReminder();
    },  24 * 60 * 60 * 1000); 

    return () => clearInterval(intervalId); 
  }, [isReminderDismissed]);
  return (
    <div className="water-reminder">
      {isReminderSet && !isReminderDismissed && (
        <div className="reminder-box">
          <p>Reminder: Time to water your plants! 🌱💧</p>
          <button onClick={handleReminderDismiss}>OK</button>
        </div>
      )}
    </div>
  );
}

export default WaterReminder;
