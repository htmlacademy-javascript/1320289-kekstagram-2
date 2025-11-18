const fetchDataFromPlaceholder = async (count) => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/comments',
    );
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    const data = await response.json();
    const comments = data.slice(0, count).map((user) => user.name);
    const emails = data.slice(0, count).map((user) => user.email);
    return { comments, emails };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getData = async (count) => await fetchDataFromPlaceholder(count);
