import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { IconButton, Divider, Avatar, List, Button } from "react-native-paper";
import MapView from "react-native-maps";
import Paragraph from "./../node_modules/react-native-paper/lib/typescript/components/Typography/v2/Paragraph.d";

const { width } = Dimensions.get("window");
const height = width * 0.6;

const imgs = [
  "https://a0.muscache.com/im/pictures/be42241a-5346-4745-a2ef-8cf7576f88b8.jpg?im_w=960",
  "https://a0.muscache.com/im/pictures/4119dad5-30be-4e72-844e-a7343046070c.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/b6b95b9b-5281-454d-adaa-af75044cacca.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/fbd09e63-43be-4e0c-87e5-bf0eecc16009.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/07ca45f5-6dd9-485f-928e-f6e683a1de31.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/87ff9bf9-5dfb-4d80-90cd-6cc61a08773e.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/040026c6-d88b-4228-9acc-994cc36fc618.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/f2ba0642-d51c-4d90-badb-b31ab2d36130.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/c0ad3aea-bd2b-42e0-bb62-81f7f4b2c4f6.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/a9159bd8-cc76-42f7-86c8-368b10b0bea1.jpg?im_w=720",
];

export default function DetCard() {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {/* carousel */}
          <ScrollView pagingEnabled horizontal style={styles.scroll}>
            {imgs.map((image, index) => (
              <>
                <Image key={index} source={{ uri: image }} style={styles.img} />
                <View>
                  <IconButton
                    icon="cards-heart-outline"
                    size={22}
                    onPress={() => console.log("Pressed")}
                    iconColor="#222"
                    style={{
                      position: "absolute",
                      top: 30,
                      right: 20,
                      backgroundColor: "white",
                    }}
                  />
                  <IconButton
                    icon="tray-arrow-up"
                    size={22}
                    onPress={() => console.log("Pressed")}
                    iconColor="#222"
                    style={{
                      position: "absolute",
                      top: 30,
                      right: 70,
                      backgroundColor: "white",
                    }}
                  />

                  <IconButton
                    icon="arrow-left"
                    size={22}
                    onPress={() => console.log("Pressed")}
                    iconColor="#222"
                    style={{
                      position: "absolute",
                      top: 30,
                      right: 350,
                      backgroundColor: "white",
                    }}
                  />
                </View>
              </>
            ))}
          </ScrollView>
          <View style={styles.pagination}>
            {imgs.map((i, k) => (
              <Text style={styles.pagingText}>⬤</Text>
            ))}
          </View>
        </View>

        {/* first paragraph */}
        <View style={styles.details}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            <IconButton icon="translate" size={25} iconColor="#222" />
            Luxury suite overlooking the Wadden Sea, Harlingen
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingTop: 10,
              position: "relative",
              right: 25,
            }}
          >
            <IconButton
              icon="star"
              size={20}
              iconColor="#222"
              style={{ position: "relative", bottom: 12, left: 10 }}
            />
            <Text>
              4.98 .{" "}
              <Text
                style={{ textDecorationLine: "underline", fontWeight: "bold" }}
              >
                47 reviews{" "}
              </Text>{" "}
            </Text>
            <IconButton
              icon="medal"
              size={20}
              iconColor="#222"
              style={{ position: "relative", bottom: 12, left: 10 }}
            />
            <Text>Superhost</Text>
          </View>
          <View style={{ position: "relative", bottom: 15 }}>
            <Text style={{ color: "gray" }}>
              Harlingen, Friseland, Netherlands
            </Text>
          </View>
        </View>
        <Divider
          bold
          style={{ position: "relative", left: 35, width: "80%" }}
        />

        {/* second Paragraph */}
        <View style={styles.details}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "bold", flexBasis: 300 }}>
              Tower hosted by Marcel & Linda{" "}
            </Text>

            <Avatar.Image size={55} source={require("../assets/avatar1.jpg")} />
          </View>

          <Text style={{ paddingTop: 20, fontSize: 16, paddingBottom: 20 }}>
            2 guests . 1 bedroom . 1 bed . 1 bathroom
          </Text>
        </View>
        <Divider
          bold
          style={{ position: "relative", left: 35, width: "80%" }}
        />

        {/* third paragraph */}
        <View style={styles.details}>
          <List.Item
            title="Marcel & Linda is a Superhost"
            description="Superhosts are experienced, highly rated hosts who are commited to providing great stays for their guests"
            left={(props) => <List.Icon {...props} icon="medal" />}
          />

          <List.Item
            title="Great location"
            description="95% of recent guests gave the location a 5-star rating"
            left={(props) => <List.Icon {...props} icon="map-marker-outline" />}
          />

          <List.Item
            title="Free cancellation for 48 hours"
            left={(props) => <List.Icon {...props} icon="calendar-outline" />}
          />
        </View>
        <Divider
          bold
          style={{ position: "relative", left: 35, width: "80%" }}
        />

        {/* 4th paragragh */}
        <View style={styles.details}>
          <Image
            source={{
              uri: "https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg",
            }}
            style={{ width: 150, height: 70, resizeMode: "contain" }}
          />
          <Text>
            Every booking includes free protection from Host cancellations,
            listing inaccuracies, and other issues like trouble checking in.
          </Text>
          <Text
            style={{
              textDecorationLine: "underline",
              fontSize: 16,
              fontWeight: "bold",
              paddingTop: 10,
            }}
          >
            Learn More
          </Text>
        </View>
        <Divider
          bold
          style={{ position: "relative", left: 35, width: "80%" }}
        />

        {/* 5th Paragraph */}
        <View style={styles.details}>
          <List.Item
            titleNumberOfLines={2}
            titleStyle={{ fontSize: 14 }}
            descriptionStyle={{
              fontWeight: "bold",
              textDecorationLine: "underline",
              fontSize: 14,
            }}
            title="Some info is shown in its original language."
            description="show original language"
            left={(props) => <List.Icon {...props} icon="translate" />}
          />
          <Text style={{ fontSize: 16 }}>
            The luxurious spacious suite is furnished with a cozy seating area,
            flat-screen TV, minibar, double box spring, double sink, jacuzzi,
            hairdryer, bathroom with spacious rain shower and toilet. A luxury
            breakfast is served every morning..
          </Text>
          <Text
            style={{
              fontSize: 16,
              textDecorationLine: "underline",
              fontWeight: "bold",
              paddingTop: 10,
            }}
          >
            Show more
          </Text>
          <IconButton
            icon="chevron-right"
            size={25}
            iconColor="#222"
            style={{ position: "relative", bottom: 37, left: 80 }}
          />
        </View>
        <Divider
          bold
          style={{ position: "relative", left: 35, width: "80%" }}
        />

        {/* 6th Paragraph */}
        <View style={styles.details}>
          <Text style={{ fontSize: 22, fontWeight: "bold", paddingBottom: 10 }}>
            {" "}
            Where you'll sleep
          </Text>
          <Image
            source={{
              uri: "https://a0.muscache.com/im/pictures/b6b95b9b-5281-454d-adaa-af75044cacca.jpg?im_w=320",
            }}
            style={{
              width: 150,
              height: 100,
              resizeMode: "contain",
              borderRadius: 10,
            }}
          />

          <Text
            style={{
              fontSize: 16,
              paddingVertical: 5,
              fontWeight: "bold",
              color: "#666",
            }}
          >
            Bedroom
          </Text>
          <Text style={{ fontSize: 16, color: "#666" }}>1 King bed</Text>
        </View>
        <Divider
          bold
          style={{ position: "relative", left: 35, width: "80%" }}
        />

        {/* 7th Paragraph */}
        <View style={styles.details}>
          <Text style={{ fontSize: 22, fontWeight: "bold", paddingBottom: 10 }}>
            {" "}
            What this place offers
          </Text>

          <List.Item
            title="Beach access - Beachfront"
            left={(props) => <List.Icon {...props} icon="beach" />}
          />

          <List.Item
            title="WiFi"
            left={(props) => <List.Icon {...props} icon="wifi" />}
          />

          <List.Item
            title="Free parking on premises "
            left={(props) => <List.Icon {...props} icon="car" />}
          />

          <List.Item
            title="Hot tub"
            left={(props) => <List.Icon {...props} icon="shower" />}
          />

          <List.Item
            title="TV "
            left={(props) => <List.Icon {...props} icon="television" />}
          />

          <List.Item
            titleStyle={{ textDecorationLine: " line-through" }}
            title="Carbon monoxide alarm "
            left={(props) => (
              <List.Icon {...props} icon="alarm-light-off-outline" />
            )}
          />

          <Button
            mode="outlined"
            textColor="black"
            style={{ borderRadius: 10 }}
          >
            Show all 18 amenities
          </Button>
        </View>

        <Divider
          bold
          style={{ position: "relative", left: 35, width: "80%" }}
        />

        {/* 8th Paragraph */}
        <View style={styles.details}>
          <Text style={{ fontSize: 22, fontWeight: "bold", paddingBottom: 10 }}>
            {" "}
            Where you'll be
          </Text>
          <View style={{ width: "100%", height: 200, borderRadius: 20 }}>
            <MapView
              style={{ flex: 1, borderRadius: 20 }}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
          </View>
          <Text
            style={{ fontSize: 16, fontWeight: "bold", paddingVertical: 10 }}
          >
            Harlingen, Friseland, Netherlands
          </Text>

          <Text style={{ fontSize: 16 }}>
            Enjoy a snack and drink with a unique view of the Nieuwe
            Willemshaven and one of the largest tidal areas in the world: th..
          </Text>
          <Text
            style={{
              fontSize: 16,
              textDecorationLine: "underline",
              fontWeight: "bold",
              paddingTop: 15,
            }}
          >
            Show more
          </Text>
          <IconButton
            icon="chevron-right"
            size={25}
            iconColor="#222"
            style={{ position: "relative", bottom: 37, left: 80 }}
          />
        </View>
        <Divider
          bold
          style={{ position: "relative", left: 35, width: "80%" }}
        />
        {/* 9th Paragraph */}
        <View style={styles.details}>
          <View style={{ flexDirection: "row" }}>
            <IconButton
              icon="star"
              size={22}
              iconColor="#222"
              style={{ position: "relative", bottom: 7 }}
            />
            <Text style={{ fontWeight: "bold", fontSize: 22 }}>
              4.98 . 47 reviews{" "}
            </Text>
          </View>
          <ScrollView horizontal>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.review}>
                <View style={{ flexDirection: "row", padding: 10 }}>
                  <Avatar.Image
                    size={50}
                    source={require("../assets/rev7.jpg")}
                  />
                  <View style={{ padding: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                      Jonas
                    </Text>
                    <Text style={{ color: "#888" }}>1 week ago</Text>
                  </View>
                </View>
                <Text style={{ paddingHorizontal: 10, lineHeight: 20 }}>
                  Very friendly host and welcoming, the perfect stay for our
                  honeymoon trip!
                </Text>
              </View>

              <View style={styles.review}>
                <View style={{ flexDirection: "row", padding: 10 }}>
                  <Avatar.Image
                    size={50}
                    source={require("../assets/rev6.jpg")}
                  />
                  <View style={{ padding: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                      Mark
                    </Text>
                    <Text style={{ color: "#888" }}>4 week ago</Text>
                  </View>
                </View>
                <Text style={{ paddingHorizontal: 10, lineHeight: 20 }}>
                  👌👌👌👌👌
                </Text>
              </View>

              <View style={styles.review}>
                <View style={{ flexDirection: "row", padding: 10 }}>
                  <Avatar.Image
                    size={50}
                    source={require("../assets/rev1.jpg")}
                  />
                  <View style={{ padding: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                      Alina
                    </Text>
                    <Text style={{ color: "#888" }}>2 months ago</Text>
                  </View>
                </View>
                <Text style={{ paddingHorizontal: 10, lineHeight: 20 }}>
                  Totally Amazing! We had wonderful days in this location! The
                  service was great, friendly and reliable. you have a great...
                  <Text
                    style={{
                      textDecorationLine: "underline",
                      fontWeight: "bold",
                      fontSize: 15,
                    }}
                  >
                    read more
                  </Text>
                </Text>
              </View>

              <View style={styles.review}>
                <View style={{ flexDirection: "row", padding: 10 }}>
                  <Avatar.Image
                    size={50}
                    source={require("../assets/rev2.jpg")}
                  />
                  <View style={{ padding: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                      Claudia
                    </Text>
                    <Text style={{ color: "#888" }}>6 months ago</Text>
                  </View>
                </View>
                <Text style={{ paddingHorizontal: 10, lineHeight: 20 }}>
                  It was a wonderful stay. Everything was 100%, perfect setting,
                  wonderful inventory, great check- in and nice communication
                  with owner/ their staff.
                  <Text
                    style={{
                      textDecorationLine: "underline",
                      fontWeight: "bold",
                      fontSize: 15,
                    }}
                  >
                    read more
                  </Text>
                </Text>
              </View>

              <View style={styles.review}>
                <View style={{ flexDirection: "row", padding: 10 }}>
                  <Avatar.Image
                    size={50}
                    source={require("../assets/rev5.jpg")}
                  />
                  <View style={{ padding: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                      Lukas
                    </Text>
                    <Text style={{ color: "#888" }}>6 months ago</Text>
                  </View>
                </View>
                <Text style={{ paddingHorizontal: 10, lineHeight: 20 }}>
                  Perfect service and a unique place. If you are in for
                  something different, this is the go to place! Highly
                  recommended.
                </Text>
              </View>

              <View style={styles.review}>
                <View style={{ flexDirection: "row", padding: 10 }}>
                  <Avatar.Image
                    size={50}
                    source={require("../assets/rev8.jpg")}
                  />
                  <View style={{ padding: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                      Steve
                    </Text>
                    <Text style={{ color: "#888" }}>1 year ago</Text>
                  </View>
                </View>
                <Text style={{ paddingHorizontal: 10, lineHeight: 20 }}>
                  The space is beautifully designed and much larger than it
                  appears in the photos. We were greeted by Nicolette who was a
                  gracious host. The wonderful breakfast each morning was ..
                  <Text
                    style={{
                      textDecorationLine: "underline",
                      fontWeight: "bold",
                      fontSize: 15,
                    }}
                  >
                    read more
                  </Text>
                </Text>
              </View>

              <View style={styles.review}>
                <View style={{ flexDirection: "row", padding: 10 }}>
                  <Avatar.Image
                    size={50}
                    source={require("../assets/rev3.jpg")}
                  />
                  <View style={{ padding: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                      Lynda
                    </Text>
                    <Text style={{ color: "#888" }}>1 year ago</Text>
                  </View>
                </View>
                <Text style={{ paddingHorizontal: 10, lineHeight: 20 }}>
                  -{" "}
                </Text>
              </View>

              <View style={styles.review}>
                <Text
                  style={{
                    textAlign: "center",
                    marginTop: 95,
                    textDecorationLine: "underline",
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                  show all 47 reviews
                </Text>
              </View>
            </View>
          </ScrollView>
          <Button
            mode="outlined"
            style={{
              marginVertical: 20,
              borderRadius: 10,
              padding: 5,
              marginHorizontal: 10,
            }}
          >
            Show all 47 reviews
          </Button>
        </View>
        <Divider
          bold
          style={{ position: "relative", left: 35, width: "80%" }}
        />
        {/* 10 th Paragraph */}
        <View style={styles.details}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "bold", flexBasis: 300 }}>
              Tower hosted by Marcel {"&"} Linda{" "}
            </Text>

            <Avatar.Image size={55} source={require("../assets/avatar1.jpg")} />
          </View>

          <Text
            style={{
              paddingTop: 10,
              fontSize: 15,
              paddingBottom: 20,
              color: "#888",
            }}
          >
            joined in March 2020{" "}
            <Text style={{ color: "black" }}> Professional Host</Text>
          </Text>

          <List.Item
            title="47 Reviews"
            left={(props) => <List.Icon {...props} icon="star" />}
          />
          <List.Item
            title="Identity verified"
            left={(props) => (
              <List.Icon {...props} icon="card-account-details" />
            )}
          />
          <List.Item
            title="Superhost"
            left={(props) => <List.Icon {...props} icon="medal" />}
          />
          <Text style={{ paddingVertical: 20, fontSize: 16 }}>Hallo,</Text>

          <Text style={{ fontSize: 16 }}>
            Wij zijn Marcel {"&"} Linda Bambach. Wij hebben een unieke
            accommodatie op een unieke…{" "}
            <Text
              style={{ fontWeight: "bold", textDecorationLine: "underline" }}
            >
              read more
            </Text>
          </Text>
          <Text style={{ paddingTop: 20, fontSize: 16, fontWeight: "bold" }}>
            During your stay
          </Text>
          <Text style={{ fontSize: 16, lineHeight: 20, paddingTop: 10 }}>
            Quality and service are very important to us. We are always
            available for questions, tips or anything we can help you with. You
            come to us to enjoy, we will do everything in our power!
          </Text>

          <Text style={{ paddingTop: 20, fontSize: 16, fontWeight: "bold" }}>
            Marcel {"&"} Linda is a Superhost
          </Text>
          <Text style={{ fontSize: 16, lineHeight: 20, paddingTop: 10 }}>
            Superhosts are experienced, highly rated hosts who are committed to
            providing great stays for guests
          </Text>

          <Text style={{ fontSize: 16, paddingTop: 25 }}>
            Languages: Nederlands, English, Deutsch
          </Text>
          <Text style={{ fontSize: 16, paddingTop: 5 }}>
            Response rate: 100%
          </Text>
          <Text style={{ fontSize: 16, paddingTop: 5 }}>
            Response time: within an hour
          </Text>

          <Button
            mode="outlined"
            textColor="black"
            style={{
              marginVertical: 20,
              borderRadius: 10,
              padding: 5,
              marginHorizontal: 10,
            }}
          >
            Contact host{" "}
          </Button>

          <Text style={{ fontSize: 14 }}>
            To protect your payment, never transfer money or communicate outside
            of the Airbnb website or app.
          </Text>
        </View>
        <Divider
          bold
          style={{ position: "relative", left: 35, width: "80%" }}
        />

        {/* 11th paragraph*/}
        <View style={styles.details}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                Availability
              </Text>
              <Text style={{ color: "#888", fontSize: 16 }}>6-11 Nov</Text>
            </View>

            <IconButton icon="chevron-right" size={35} iconColor="#222" />
          </View>
        </View>
        <Divider
          bold
          style={{ position: "relative", left: 35, width: "80%" }}
        />
        <View style={styles.details}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                House rules
              </Text>
              <Text style={{ color: "#888", fontSize: 16 }}>
                Check-in: 15:00 - 21:00
              </Text>
            </View>

            <IconButton icon="chevron-right" size={35} iconColor="#222" />
          </View>
        </View>
        <Divider
          bold
          style={{ position: "relative", left: 35, width: "80%" }}
        />

        <View style={styles.details}>
          <View
            style={{ flexDirection: "row", justifyContent: 'space-evenly', paddingHorizontal:18 }}
          >
            <View>
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                Health {"&"} Safety
              </Text>
              <Text style={{ color: "#888", fontSize: 16 }}>
                Airbnb's COVID-19 safety practices apply . No carbon monoxide
                alarm
              </Text>
            </View>

            <IconButton icon="chevron-right" size={35} iconColor="#222" />
          </View>
        </View>
        <Divider
          bold
          style={{ position: "relative", left: 35, width: "80%" }}
        />

        <View style={styles.details}>
          <View
            style={{ flexDirection: "row", justifyContent: 'space-evenly', paddingHorizontal:18}}
          >
            <View >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                Cancellation policy
              </Text>
              <Text style={{ color: "#888", fontSize: 16 ,  }}>
                Free cancellation for 48 hours. Review the Host's full
                cancellation policy which applies even if you cancel for illness
                or disruptions caused by COVID-19.
              </Text>
            </View>

            <IconButton icon="chevron-right" size={35} iconColor="#222" />
          </View>
        </View>
        <Divider
          bold
          style={{ position: "relative", left: 35, width: "80%" }}
        />

        <View style={styles.details}>
        <List.Item titleStyle={{textDecorationLine:'underline'}}
         title="Report this listing"
         left={props => <List.Icon {...props} icon="flag" />}/>
        </View>
      </ScrollView>

      {/* reserve */}
      <View style={{padding:20, borderTopColor:'lightgray', borderStyle:'solid', borderWidth:1}}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <View>
          <Text style={{fontWeight:'bold', fontSize:16}}> $327 <Text style={{fontWeight:'normal'}}> night</Text></Text>
          <Text style={{textDecorationLine:'underline', fontWeight:'bold', fontSize:16, paddingLeft:5}}>6-11 Nov</Text>
          </View>
          <Button mode="contained" style={{backgroundColor:'#E61E4D', borderRadius:8, padding:2 }} onPress={() => console.log('Pressed')}> Reserve</Button>
          
        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { width, height },
  scroll: { width, height },
  img: { width, height, resizeMode: "cover" },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
  pagingText: {
    color: "#fff",
    margin: 5,
  },
  details: {
    padding: 20,
  },
  review: {
    width: 270,
    height: 230,
    borderWidth: 1,
    borderColor: "lightgray",
    borderStyle: "solid",
    borderRadius: 10,
    marginHorizontal: 10,
  },
});
