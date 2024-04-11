import { Image, Pressable, ScrollView, Text, View } from "react-native";
import ButtonTrial from "./ButtonTrial";

const PressableTrial = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ButtonTrial />
      <ScrollView>
        <Pressable onPress={() => console.log("some function")}>
          <Image
            source={require("../assets/adaptive-icon.png")}
            style={{ width: 200, height: 200 }}
          />
        </Pressable>
        <Pressable>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            exercitationem ipsa provident fugit nobis corrupti et vitae
            laudantium, quibusdam maxime officiis, ea expedita eos in,
            repellendus debitis. Saepe, nulla officiis? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Id exercitationem ipsa provident
            fugit nobis corrupti et vitae laudantium, quibusdam maxime officiis,
            ea expedita eos in, repellendus debitis. Saepe, nulla officiis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            exercitationem ipsa provident fugit nobis corrupti et vitae
            laudantium, quibusdam maxime officiis, ea expedita eos in,
            repellendus debitis. Saepe, nulla officiis? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Id exercitationem ipsa provident
            fugit nobis corrupti et vitae laudantium, quibusdam maxime officiis,
            ea expedita eos in, repellendus debitis. Saepe, nulla officiis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            exercitationem ipsa provident fugit nobis corrupti et vitae
            laudantium, quibusdam maxime officiis, ea expedita eos in,
            repellendus debitis. Saepe, nulla officiis? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Id exercitationem ipsa provident
            fugit nobis corrupti et vitae laudantium, quibusdam maxime officiis,
            ea expedita eos in, repellendus debitis. Saepe, nulla officiis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            exercitationem ipsa provident fugit nobis corrupti et vitae
            laudantium, quibusdam maxime officiis, ea expedita eos in,
            repellendus debitis. Saepe, nulla officiis? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Id exercitationem ipsa provident
            fugit nobis corrupti et vitae laudantium, quibusdam maxime officiis,
            ea expedita eos in, repellendus debitis. Saepe, nulla officiis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            exercitationem ipsa provident fugit nobis corrupti et vitae
            laudantium, quibusdam maxime officiis, ea expedita eos in,
            repellendus debitis. Saepe, nulla officiis? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Id exercitationem ipsa provident
            fugit nobis corrupti et vitae laudantium, quibusdam maxime officiis,
            ea expedita eos in, repellendus debitis. Saepe, nulla officiis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            exercitationem ipsa provident fugit nobis corrupti et vitae
            laudantium, quibusdam maxime officiis, ea expedita eos in,
            repellendus debitis. Saepe, nulla officiis?
          </Text>
        </Pressable>
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={{ width: 300, height: 300 }}
        />
      </ScrollView>
    </View>
  );
};

export default PressableTrial;
