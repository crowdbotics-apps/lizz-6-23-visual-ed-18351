import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

export class _Blank extends React.Component {
  static navigationOptions = {
    title: "Blank".toUpperCase()
  }

  state = { Toggle_718: true, Toggle_522: false }

  render = () => (
    <View
      style={{
        overflow: "visible",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderStyle: "solid",
        backgroundSize: "auto"
      }}
    >
      <View
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 0,
          paddingBottom: 0,
          overflow: "visible",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "center",
          borderStyle: "solid",
          backgroundSize: "auto"
        }}
      >
        <View
          style={{
            overflow: "visible",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <Icon
            iconFont="FontAwesome"
            icon="fas fa-chevron-left"
            style={{ overflow: "visible", borderStyle: "solid" }}
          />
        </View>
        <View
          style={{
            width: "70%",
            overflow: "visible",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "center",
            alignContent: "stretch",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <Text
            style={{
              marginRight: 20,
              overflow: "visible",
              fontSize: 16,
              color: "#151515",
              fontWeight: "bold",
              fontFamily: "Trebuchet MS",
              borderStyle: "solid"
            }}
          >
            SETTINGS
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "center",
          borderStyle: "solid",
          backgroundSize: "auto"
        }}
      >
        <View
          style={{
            width: "70%",
            overflow: "visible",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <Text
            style={{
              overflow: "visible",
              fontSize: 14,
              color: "#f13447",
              fontWeight: "bold",
              fontFamily: "Trebuchet MS",
              borderStyle: "solid"
            }}
          >
            PROFILE SETTINGS
          </Text>
        </View>
        <View
          style={{
            overflow: "visible",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "flex-end",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <Icon
            iconFont="FontAwesome"
            icon=""
            style={{ overflow: "visible", borderStyle: "solid" }}
          />
        </View>
      </View>
      <View
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          overflow: "visible",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "center",
          borderStyle: "solid",
          backgroundSize: "auto"
        }}
      >
        <View
          style={{
            width: "70%",
            overflow: "visible",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <Text
            style={{
              overflow: "visible",
              color: "#151515",
              fontWeight: "bold",
              fontFamily: "Trebuchet MS",
              borderStyle: "solid"
            }}
          >
            Edit Profile
          </Text>
        </View>
        <View
          style={{
            overflow: "visible",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "flex-end",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <Icon
            iconFont="FontAwesome"
            icon=""
            style={{ overflow: "visible", borderStyle: "solid" }}
          />
        </View>
      </View>
      <View
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          overflow: "visible",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "center",
          borderStyle: "solid",
          backgroundSize: "auto"
        }}
      >
        <View
          style={{
            width: "70%",
            overflow: "visible",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <Text
            style={{
              overflow: "visible",
              color: "#151515",
              fontWeight: "bold",
              fontFamily: "Trebuchet MS",
              borderStyle: "solid"
            }}
          >
            Change Password
          </Text>
        </View>
        <View
          style={{
            overflow: "visible",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "flex-end",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <Icon
            iconFont="FontAwesome"
            icon="fas fa-chevron-right"
            style={{ overflow: "visible", borderStyle: "solid" }}
          />
        </View>
      </View>
      <View
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          overflow: "visible",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "center",
          borderStyle: "solid",
          backgroundSize: "auto"
        }}
      >
        <View
          style={{
            width: "70%",
            overflow: "visible",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <Text
            style={{
              overflow: "visible",
              color: "#151515",
              fontWeight: "bold",
              fontFamily: "Trebuchet MS",
              borderStyle: "solid"
            }}
          >
            Send Push Notifications
          </Text>
        </View>
        <View
          style={{
            overflow: "visible",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "flex-end",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <Toggle
            activeColor="#f13447"
            inactiveColor=""
            disabled={false}
            text=""
            style={{ overflow: "visible", borderStyle: "solid" }}
            checked={this.state.Toggle_718}
            onChange={nextChecked => this.setState({ Toggle_718: nextChecked })}
          />
        </View>
      </View>
      <View
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          overflow: "visible",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "center",
          borderStyle: "solid",
          backgroundSize: "auto"
        }}
      >
        <View
          style={{
            width: "70%",
            overflow: "visible",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <Text
            style={{
              overflow: "visible",
              color: "#151515",
              fontWeight: "bold",
              fontFamily: "Trebuchet MS",
              borderStyle: "solid"
            }}
          >
            Refresh Automatically
          </Text>
        </View>
        <View
          style={{
            overflow: "visible",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "flex-end",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <Toggle
            activeColor="#f13447"
            inactiveColor=""
            disabled={false}
            text=""
            style={{ overflow: "visible", borderStyle: "solid" }}
            checked={this.state.Toggle_522}
            onChange={nextChecked => this.setState({ Toggle_522: nextChecked })}
          />
        </View>
      </View>
      <View
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          overflow: "visible",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "center",
          borderStyle: "solid",
          backgroundSize: "auto"
        }}
      >
        <View
          style={{
            width: "70%",
            overflow: "visible",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <Text
            style={{
              overflow: "visible",
              fontSize: 14,
              color: "#f13447",
              fontWeight: "bold",
              fontFamily: "Trebuchet MS",
              borderStyle: "solid"
            }}
          >
            PROFILE SETTINGS
          </Text>
        </View>
        <View
          style={{
            overflow: "visible",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "flex-end",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <Icon
            iconFont="FontAwesome"
            icon=""
            style={{ overflow: "visible", borderStyle: "solid" }}
          />
        </View>
      </View>
      <View
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          overflow: "visible",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "center",
          borderStyle: "solid",
          backgroundSize: "auto"
        }}
      >
        <View
          style={{
            overflow: "visible",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <Icon
            iconFont="FontAwesome"
            icon="fab fa-twitter"
            style={{
              overflow: "visible",
              borderStyle: "solid",
              color: "#349cdb"
            }}
          />
        </View>
        <View
          style={{
            width: "70%",
            overflow: "visible",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <Text
            style={{
              overflow: "visible",
              color: "#349cdb",
              fontWeight: "bold",
              fontFamily: "Trebuchet MS",
              borderStyle: "solid"
            }}
          >
            Find Friends with Twitter
          </Text>
        </View>
        <View
          style={{
            overflow: "visible",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "flex-end",
            alignContent: "stretch",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <Icon
            iconFont="FontAwesome"
            icon="fas fa-chevron-right"
            style={{
              overflow: "visible",
              borderStyle: "solid",
              color: "#349cdb"
            }}
          />
        </View>
      </View>
      <View
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          overflow: "visible",
          color: "#bfbfc1",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "center",
          borderStyle: "solid",
          backgroundSize: "auto"
        }}
      >
        <View
          style={{
            overflow: "visible",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <Icon
            iconFont="FontAwesome"
            icon="fab fa-google"
            style={{ overflow: "visible", borderStyle: "solid" }}
          />
        </View>
        <View
          style={{
            width: "70%",
            overflow: "visible",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <Text
            style={{
              overflow: "visible",
              fontWeight: "bold",
              fontFamily: "Trebuchet MS",
              borderStyle: "solid"
            }}
          >
            Find Friends with Google
          </Text>
        </View>
        <View
          style={{
            overflow: "visible",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "flex-end",
            alignContent: "stretch",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <Icon
            iconFont="FontAwesome"
            icon="fas fa-chevron-right"
            style={{ overflow: "visible", borderStyle: "solid" }}
          />
        </View>
      </View>
      <View
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          overflow: "visible",
          color: "#2b4488",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "center",
          borderStyle: "solid",
          backgroundSize: "auto"
        }}
      >
        <View
          style={{
            overflow: "visible",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <Icon
            iconFont="FontAwesome"
            icon="fab fa-facebook-f"
            style={{ overflow: "visible", borderStyle: "solid" }}
          />
        </View>
        <View
          style={{
            width: "70%",
            overflow: "visible",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <Text
            style={{
              overflow: "visible",
              fontWeight: "bold",
              fontFamily: "Trebuchet MS",
              borderStyle: "solid"
            }}
          >
            Find Friends with Facebook
          </Text>
        </View>
        <View
          style={{
            overflow: "visible",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "flex-end",
            alignContent: "stretch",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <Icon
            iconFont="FontAwesome"
            icon="fas fa-chevron-right"
            style={{ overflow: "visible", borderStyle: "solid" }}
          />
        </View>
      </View>
      <Text style={{ overflow: "visible", borderStyle: "solid" }}>...</Text>
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
