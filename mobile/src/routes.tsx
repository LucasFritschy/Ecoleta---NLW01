import React from "react";
//https://reactnavigation.org/docs/navigation-container/
import { NavigationContainer } from "@react-navigation/native";
//https://reactnavigation.org/docs/stack-navigator/
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import Points from "./pages/Points";
import Detail from "./pages/Detail";

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    //NavigationContainer: define o comportamento das rotas, todas as rotas da app devem estar dentro dele
    <NavigationContainer>
      <AppStack.Navigator headerMode="none" screenOptions={{
          // define um estilo em comum para todas as telas da aplicação
          cardStyle:{
            backgroundColor: "#f0f0f5",
          }
      }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Points" component={Points} />
        <AppStack.Screen name="Detail" component={Detail} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
