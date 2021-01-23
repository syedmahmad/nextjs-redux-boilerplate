import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';

// Persisting Redux Store as Next.js refresh pages and we need to maintain state...
let devtools, store;
const isClient = typeof window !== 'undefined';
if (isClient) {
	devtools = (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__)
		? window.__REDUX_DEVTOOLS_EXTENSION__()
		: f => f

	const { persistStore, persistReducer } = require('redux-persist');
	const storage = require('redux-persist/lib/storage').default;
	const persistConfig = {
		key: 'root',
		storage
	};

	store = createStore(
		persistReducer(persistConfig, rootReducer),
		compose(
			applyMiddleware(thunk),
			devtools
		)
	);

	store.__PERSISTOR = persistStore(store);
} else {
	store = createStore(
		rootReducer,
		compose(
			applyMiddleware(thunk)
		)
	);
}

export default store;
