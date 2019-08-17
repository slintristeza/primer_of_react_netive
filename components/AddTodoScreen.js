import React, {Component} from 'react';
import {TextInput, Button, StyleSheet, Text, View} from 'react-native';

export default class TodoListScreen extends Component {
  constructor(props) {
    super(props);
    const {key, callback} = props.navigation.state.params;
    this.state = {
      key,
      callback,
      title: '',
      memo: '',
    };
  }
  render() {
    const {key, callback, title, memo} = this.state;
    let item = {key, title, memo};
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text>タイトル</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={title => this.setState({title})}
            value={this.state.title}
          />
          <Text>メモ</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={memo => this.setState({memo})}
            value={this.state.memo}
          />
        </View>
        <Button
          title="追加する"
          onPress={() => {
            callback(item);
            this.props.navigation.goBack();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    flex: 1,
    margin: 20,
  },
  textInput: {
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
});
