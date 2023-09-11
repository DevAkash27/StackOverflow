import React from 'react';
import {View, Text, Linking} from 'react-native';
import {COMMON_STRINGS} from '../../constants/strings';
import COLORS from '../../constants/colors';
import styles from './styles';

//common Component to show questions and links
const RenderQuestions = ({data}) => {
  return (
    <View style={styles.renderItemContainer}>
      <Text style={styles.questionText}>
        {COMMON_STRINGS.QUESTION}
        <Text style={styles.questionText}>{data?.item?.title}</Text>
      </Text>

      <Text style={styles.linkText}>
        {COMMON_STRINGS.LINK}
        <Text
          onPress={() => Linking.openURL(data?.item?.link)}
          style={styles.questionLink}>
          {data?.item?.link}
        </Text>
      </Text>
      <Text
        style={[
          styles.responseText,
          {
            color: data?.item?.is_answered
              ? COLORS.GREEN
              : COLORS.NOT_ANSWERED_TEXT_COLOR,
          },
        ]}>
        {data?.item?.is_answered
          ? COMMON_STRINGS.ANSWERED
          : COMMON_STRINGS.NOT_ANSWERED}
      </Text>
    </View>
  );
};

export default RenderQuestions;
