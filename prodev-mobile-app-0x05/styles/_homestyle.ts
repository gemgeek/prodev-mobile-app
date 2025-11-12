import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5', 
    },
    searchGroup: {
        backgroundColor: 'white',
        padding: 10,
    },
    searchFormGroup: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 30,
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    searchControlGroup: {
        flex: 1,
        padding: 10,
    },
    searchFormText: {
        fontSize: 14,
        color: '#666',
    },
    searchControl: {
        height: 20,
    },
    searchButton: {
        backgroundColor: '#34967C',
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    filterGroup: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    filterContainer: {
        alignItems: 'center',
        marginHorizontal: 10,
        width: 60,
        height: 60, 
    },
    listingContainer: {
        flex: 1,
        padding: 10,
    },
    paginationContainer: {
        padding: 20,
        alignItems: 'center',
    },
    showMoreButton: {
        backgroundColor: '#34967C',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    showMoreButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export { styles };