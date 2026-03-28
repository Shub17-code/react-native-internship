# API Integration in React Native 🌐

## Topics Covered

- REST APIs
- HTTP Methods (GET, POST, PUT, DELETE)
- Fetch API in React Native

## What I Learned

- APIs are used to fetch data from a server
- fetch() is used to make API calls in React Native
- useEffect is used to call API when component loads
- Data is stored using useState

## Example Code

```javascript
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function ApiDemo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <View>
      {data.slice(0, 5).map((item) => (
        <Text key={item.id}>{item.title}</Text>
      ))}
    </View>
  );
}
```
