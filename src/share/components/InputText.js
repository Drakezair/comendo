import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import PropTypes from "prop-types";
import { FontAwesome } from "@expo/vector-icons";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import { themeColors } from "../constans";
import { Controller } from "react-hook-form";

export default function InputText({
  leftIcon,
  rightIcon,
  placeholder,
  hidden,
  style,
  error,
  name,
  control,
}) {
  const useStyle = styles({ leftIcon, rightIcon, style });
  return (
    <View>
      {error && <Text style={useStyle.errorText}>{error}</Text>}
      <View style={useStyle.container}>
        {leftIcon && !rightIcon ? (
          <TouchableOpacity onPress={leftIcon.action}>
            <FontAwesome name={leftIcon?.name} size={30} />
          </TouchableOpacity>
        ) : null}
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              secureTextEntry={hidden}
              style={useStyle.input}
              onChangeText={onChange}
              placeholder={placeholder}
              value={value}
            />
          )}
        />
        {rightIcon && (
          <TouchableOpacity onPress={rightIcon.action}>
            <FontAwesome name={rightIcon?.name} size={30} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = (props) =>
  StyleSheet.create({
    container: {
      height: 56,
      borderRadius: 16,
      backgroundColor: themeColors.secondaryColor,
      padding: 10,
      paddingHorizontal: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      ...props?.style,
    },
    input: {
      height: "100%",
      width: "90%",
    },
    errorText: {
      marginLeft: 10,
      color: themeColors.errorColor,
      marginVertical: 3,
    },
  });

InputText.propTypes = {
  style: ViewPropTypes.style,
  leftIcon: PropTypes.shape({
    name: PropTypes.string,
    action: PropTypes.func,
  }),
  rightIcon: PropTypes.shape({
    name: PropTypes.string,
    action: PropTypes.func,
  }),
  placeholder: PropTypes.string,
  error: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any,
  hidden: PropTypes.bool,
};
