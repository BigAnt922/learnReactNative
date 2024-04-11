import { useState } from "react";
import { Button, Text, View } from "react-native";

const ButtonTrial = () => {
  const [buttonClicked, setbuttonClicked] = useState(false);

  const handleButtonClick = () => {
    setbuttonClicked(!buttonClicked);
  };

  return (
    <>
      <Button
        title={buttonClicked ? "reset" : "press"}
        onPress={handleButtonClick}
        color="gold"
        disabled={false}
      />
      {buttonClicked && (
        <Text
          style={{
            paddingTop: 60,
            fontSize: 24,
            fontWeight: "700",
            color: "purple",
          }}
        >
          YOU CLICKED BUTTON{" "}
        </Text>
      )}
    </>
  );
};

export default ButtonTrial;
