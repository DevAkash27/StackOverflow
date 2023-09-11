import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import styles from './styles';
import {
  API_URLS,
  COMMON_STRINGS,
  REACT_SCREEN_STRINGS,
} from '../../constants/strings';
import COLORS from '../../constants/colors';
import RenderQuestions from './RenderItems';

const ReactScreen = () => {
  const [htmlContent, setHtmlContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(true);
  const page = useRef(1);
  const hasMoreItems = useRef(true);
  useEffect(() => {
    setIsLoading(true);
    getData();
    setIsLoading(false);
  }, []);

  //method for api call to get questions
  const getData = () => {
    axios({
      method: 'get',
      url: `${API_URLS.REACT_HOT_QUESTIONS}${page.current}&pagesize=15`,
    })
      .then(response => {
        setIsConnected(true);
        hasMoreItems.current = response.data?.has_more;
        var previousData = htmlContent;
        setHtmlContent(previousData.concat(response.data?.items));
      })
      .catch(error => {
        if (error?.message == 'Network Error') {
          setIsConnected(false);
        }
      });
  };

  //method to load more data when flat list reaches bottom end
  const loadMore = () => {
    if (hasMoreItems.current) {
      page.current = page.current + 1;
      getData();
    }
  };

  //method to render the questions list items
  const renderItems = data => {
    return <RenderQuestions data={data} />;
  };

  const renderLoader = () => {
    return (
      <View style={styles.activityIndicator}>
        {hasMoreItems.current && (
          <ActivityIndicator size="small" color={COLORS.LOADER} />
        )}
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {isConnected && (
        <>
          <Text style={styles.headingText}>{REACT_SCREEN_STRINGS.HEADING}</Text>
          {isLoading ? (
            <ActivityIndicator size="small" color={COLORS.LOADER} />
          ) : (
            <FlatList
              style={styles.flatListStyle}
              data={htmlContent}
              renderItem={renderItems}
              onEndReached={loadMore}
              onEndReachedThreshold={0}
              ListFooterComponent={renderLoader}
            />
          )}
        </>
      )}
      {!isConnected && (
        <>
          <View style={styles.noInternetConnectionView}>
            <Text style={styles.noIntenetText}>
              {COMMON_STRINGS.NO_INTERNET_CONNECTION}
            </Text>
            <Text style={styles.noIntenetText}>
              {COMMON_STRINGS.CHECK_YOUR_CONNECTION}
            </Text>
            <TouchableOpacity
              onPress={() => getData()}
              style={styles.retryButton}>
              <Text style={styles.retryText}>{COMMON_STRINGS.RETRY}</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default ReactScreen;
