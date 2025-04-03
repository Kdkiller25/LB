import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [activeTab, setActiveTab] = useState('WEEKLY'); // State to track active tab

  const weeklyPlayers = [
    { name: 'Player 1', points: 45 },
    { name: 'Player 2', points: 42 },
    { name: 'Player 3', points: 34 },
    { name: 'Mayur Dubey', points: 46 },
    { name: 'Aarush Gedam', points: 65 },
    { name: 'Anuj', points: 34 },
    { name: 'Rajesh Gaikwad', points: 23 },
    { name: 'Darshan IT', points: 32 },
    { name: 'A', points: 1963 },
    { name: 'B', points: 1658 },
    { name: 'C', points: 1251 },
    { name: 'D', points: 2111 },
    { name: 'E', points: 2000 },
    { name: 'F', points: 355 },
    { name: 'G', points: 1501 },
    { name: 'Amaan', points: 0 },
  ];

  const allTimePlayers = [
    { name: 'Player A', points: 100 },
    { name: 'Player B', points: 95 },
    { name: 'Player C', points: 90 },
    { name: 'Player D', points: 85 },
    { name: 'Player E', points: 80 },
    { name: 'Player F', points: 75 },
    { name: 'Player G', points: 70 },
    { name: 'Player H', points: 65 },
    { name: 'Player I', points: 60 },
  ];

  const players = activeTab === 'WEEKLY' ? weeklyPlayers : allTimePlayers;
  const sortedPlayers = [...players].sort((a, b) => b.points - a.points); // Sort players by points in descending order

  // Function to get rank image based on points
  const getRankImage = (points) => {
    if (points >= 1 && points <= 99) {
      return 'https://i.postimg.cc/HntYHP35/Ignite-Bronze.png'; // Replace with your live link for rank Ignite Bronze
    } else if (points >= 100 && points <= 199) {
      return 'https://i.postimg.cc/MGzYpcWQ/Ignite-Silver.png'; // Replace with your live link for rank Ignite Silver
    } else if (points >= 200 && points <= 299) {
      return 'https://i.postimg.cc/G22JvZT3/Ignite-Gold.png'; // Replace with your live link for rank Ignite Gold
    } else if (points >= 300 && points <= 399) {
      return 'https://i.postimg.cc/QNvwxqvK/Stride-Bronze.png'; // Replace with your live link for rank Stride Bronze
    } else if (points >= 400 && points <= 499) {
      return 'https://i.postimg.cc/sDS8BhR6/Stride-Silver.png'; // Replace with your live link for rank Stride Silver
    } else if (points >= 500 && points <= 599) {
      return 'https://i.postimg.cc/RZLDdxhw/Stride-Gold.png'; // Replace with your live link for rank Stride Gold
    } else if (points >= 600 && points <= 699) {
      return 'https://i.postimg.cc/QM6nLgpt/Surge-Bronze.png'; // Replace with your live link for rank Surge Bronze
    } else if (points >= 700 && points <= 799) {
      return 'https://i.postimg.cc/mDtpTcwS/Surge-Silver.png'; // Replace with your live link for rank Surge Silver
    } else if (points >= 800 && points <= 899) {
      return 'https://i.postimg.cc/NFXNrWZ9/Surge-Gold.png'; // Replace with your live link for rank Surge Gold
    } else if (points >= 900 && points <= 999) {
      return 'https://i.postimg.cc/ZKksh5yr/Core-Bronze.png'; // Replace with your live link for rank Core Bronze
    } else if (points >= 1000 && points <= 1099) {
      return 'https://i.postimg.cc/5Nw79WwD/Core-Silver.png'; // Replace with your live link for rank Core Silver
    } else if (points >= 1100 && points <= 1199) {
      return 'https://i.postimg.cc/Qdh6HYmC/Core-Gold.png'; // Replace with your live link for rank Core Gold
    } else if (points >= 1200 && points <= 1299) {
      return 'https://i.postimg.cc/J7XKKCdt/Pulse-Bronze.png'; // Replace with your live link for rank Pulse Bronze
    } else if (points >= 1300 && points <= 1399) {
      return 'https://i.postimg.cc/RZSRM6Cn/Pulse-Silver.png'; // Replace with your live link for rank Pulse Silver
    } else if (points >= 1400 && points <= 1499) {
      return 'https://i.postimg.cc/KvrfSrb2/Pulse-Gold.png'; // Replace with your live link for rank Pulse Gold
    } else if (points >= 1500 && points <= 1599) {
      return 'https://i.postimg.cc/wTd2G4S2/Edge-Bronze.png'; // Replace with your live link for rank Edge Bronze
    } else if (points >= 1600 && points <= 1699) {
      return 'https://i.postimg.cc/Fz0ZK0J0/Edge-Silver.png'; // Replace with your live link for rank Edge Silver
    } else if (points >= 1700 && points <= 1799) {
      return 'https://i.postimg.cc/wvC2Hw36/Edge-Gold.png'; // Replace with your live link for rank Edge Gold
    } else if (points >= 1800 && points <= 1899) {
      return 'https://i.postimg.cc/g2gKrzrt/Titan-Bronze.png'; // Replace with your live link for rank Titan Bronze
    } else if (points >= 1900 && points <= 1999) {
      return 'https://i.postimg.cc/mrqNNmYQ/Titan-Silver.png'; // Replace with your live link for rank Titan Silver
    } else if (points >= 2000 && points <= 2099) {
      return 'https://i.postimg.cc/9fzY767m/Titan-Gold.png'; // Replace with your live link for rank Titan Gold
    } else if (points >= 2100 && points <= Infinity) {
      return 'https://i.postimg.cc/50YgZh47/Arthlete-Ace.png'; // Replace with your live link for rank Arthlete Ace
    } else {
      return 'https://example.com/default.png'; // Replace with your live link for default rank
    }
  };

  return (
    <View style={styles.container}>
      {/* Header with Back Arrow, Title, and Info Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Back button pressed')}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.leaderboardTitle}>LEADERBOARD</Text>
        <TouchableOpacity onPress={() => console.log('Info button pressed')}>
          <Text style={styles.infoButton}>ℹ</Text>
        </TouchableOpacity>
      </View>

      {/* Tab Section */}
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setActiveTab('WEEKLY')}>
          <Text style={[styles.tab, activeTab === 'WEEKLY' && styles.activeTab]}>
            WEEKLY
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('ALL TIME')}>
          <Text style={[styles.tab, activeTab === 'ALL TIME' && styles.activeTab]}>
            ALL TIME
          </Text>
        </TouchableOpacity>
      </View>

      {/* Podium Section */}
      <View style={styles.podium}>
        <View style={styles.podiumContainer}>
          {/* Second Place */}
          {sortedPlayers[1] && (
            <View style={styles.podiumItem}>
              <Image
                source={{ uri: getRankImage(sortedPlayers[1].points) }}
                style={styles.podiumAvatar}
              />
              <Text style={styles.podiumPlayerName}>{sortedPlayers[1].name}</Text>
              <View style={styles.pointsBox}>
                <Text style={styles.podiumPoints}>{sortedPlayers[1].points} pts</Text>
              </View>
              <View style={[styles.podiumPillar, styles.secondPlace]}>
                <Text style={styles.podiumNumber}>2</Text>
              </View>
            </View>
          )}

          {/* First Place */}
          {sortedPlayers[0] && (
            <View style={styles.podiumItem}>
              <Image
                source={{ uri: getRankImage(sortedPlayers[0].points) }}
                style={[styles.podiumAvatar, { width: 60, height: 60 }]}
                resizeMode="contain"
              />
              <Text style={styles.podiumPlayerName}>{sortedPlayers[0].name}</Text>
              <View style={styles.pointsBox}>
                <Text style={styles.podiumPoints}>{sortedPlayers[0].points} pts</Text>
              </View>
              <View style={[styles.podiumPillar, styles.firstPlace]}>
                <Text style={styles.podiumNumber}>1</Text>
              </View>
            </View>
          )}

          {/* Third Place */}
          {sortedPlayers[2] && (
            <View style={styles.podiumItem}>
              <Image
                source={{ uri: getRankImage(sortedPlayers[2].points) }}
                style={styles.podiumAvatar}
              />
              <Text style={styles.podiumPlayerName}>{sortedPlayers[2].name}</Text>
              <View style={styles.pointsBox}>
                <Text style={styles.podiumPoints}>{sortedPlayers[2].points} pts</Text>
              </View>
              <View style={[styles.podiumPillar, styles.thirdPlace]}>
                <Text style={styles.podiumNumber}>3</Text>
              </View>
            </View>
          )}
        </View>
      </View>

      {/* Leaderboard Container */}
      <View style={styles.leaderboardContainer}>
        <FlatList
          data={sortedPlayers} // Use sortedPlayers for descending order
          keyExtractor={(item) => item.name}
          renderItem={({ item, index }) => (
            <View style={styles.listItem}>
              <View style={styles.listLeft}>
                <Text style={styles.listRank}>{index + 1}</Text>
                {/* Display rank image based on points */}
                <Image source={{ uri: getRankImage(item.points) }} style={styles.listAvatar} />
                <Text style={styles.listName}>{item.name}</Text>
              </View>
              <Text style={styles.listPoints}>{item.points} pts</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Align back arrow, title, and info button
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#000',
  },
  backArrow: {
    fontSize: 24,
    color: '#fff',
  },
  leaderboardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF4500',
  },
  infoButton: {
    fontSize: 24,
    color: '#fff',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  tab: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginHorizontal: 10,
    paddingVertical: 5,
  },
  activeTab: {
    color: '#FF4500',
    borderBottomWidth: 2,
    borderBottomColor: '#FF4500',
  },
  podium: {
    marginBottom: 20,
  },
  podiumContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  podiumItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  podiumPillar: {
    width: 80,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  firstPlace: {
    backgroundColor: '#FF4500',
    height: 160,
  },
  secondPlace: {
    backgroundColor: '#C0C0C0',
    height: 140,
  },
  thirdPlace: {
    backgroundColor: '#CD7F32',
    height: 120,
  },
  podiumAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  podiumPlayerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 5,
  },
  pointsBox: {
    backgroundColor: '#1E1E1E',
    padding: 8,
    borderRadius: 15,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#fff',
  },
  podiumPoints: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF4500',
  },
  podiumNumber: {
    fontFamily: 'Bungee',
    fontSize: 86,
    fontWeight: 'bold',
    color: '#fff',
  },
  leaderboardContainer: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#333',
    padding: 10,
    marginVertical: 5,
    borderRadius: 56,
    borderWidth: 2,
    borderColor: '#fff',
  },
  listLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listRank: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 10,
  },
  listAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  listName: {
    fontSize: 14,
    color: '#fff',
  },
  listPoints: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF4500',
  },
});

export default App;
