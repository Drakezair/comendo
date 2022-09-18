import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import PropTypes from "prop-types";
import { themeColors } from "../constans";

export default function Button({
  text,
  leftIcon,
  rightIcon,
  style,
  variant = "primary",
  onPress,
}) {
  const useStyle = styles({ leftIcon, rightIcon, style, variant });

  return (
    <TouchableOpacity onPress={onPress} style={useStyle.container}>
      {leftIcon && !rightIcon ? (
        <FontAwesome name={leftIcon} size={30} />
      ) : null}
      <Text style={useStyle.text}>{text}</Text>
      {rightIcon && <FontAwesome name={rightIcon} size={30} />}
    </TouchableOpacity>
  );
}

const variantStyle = {
  primary: {
    container: {
      height: 64,
      borderRadius: 40,
      backgroundColor: themeColors.primaryColor,
      padding: 10,
      paddingHorizontal: 20,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      textAlign: "center",
      width: "90%",
      fontSize: 16,
      color: "white",
      fontWeight: "bold",
    },
  },
  secondary: {
    container: {
      height: 64,
      borderRadius: 40,
      borderColor: themeColors.primaryColor,
      borderWidth: 2,
      padding: 10,
      paddingHorizontal: 20,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      textAlign: "center",
      width: "90%",
      fontSize: 16,
      color: themeColors.primaryColor,
      fontWeight: "bold",
    },
  },
  only_text: {
    container: {
      paddingHorizontal: 20,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      textAlign: "center",
      width: "90%",
      fontSize: 16,
      color: themeColors.primaryColor,
      fontWeight: "bold",
      textDecorationLine: "underline",
    },
  },
};

const styles = (props) =>
  StyleSheet.create({
    container: { ...variantStyle[props.variant].container, ...props?.style },
    text: { ...variantStyle[props.variant].text },
  });

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "only_text"]),
  style: ViewPropTypes.style,
  leftIcon: PropTypes.string,
  text: PropTypes.string,
  rightIcon: PropTypes.string,
  onPress: PropTypes.funct,
};
