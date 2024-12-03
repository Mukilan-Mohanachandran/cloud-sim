from sklearn.cluster import KMeans
import numpy as np

def cluster_data(data, n_clusters):
    """
    Clusters an array of arrays [id, x, y] using K-means clustering.
    
    Args:
        data (list of list): The input data in the format [[id, x, y], ...].
        n_clusters (int): The number of clusters to form.
        
    Returns:
        list of dict: A list of clusters, each containing 'cluster_id' and 'points' (list of [id, x, y]).
    """
    # Convert data to a NumPy array
    data_array = np.array(data)
    
    # Extract x, y coordinates for clustering
    coordinates = data_array[:, 1:]  # Exclude the id column
    
    # Perform K-means clustering
    kmeans = KMeans(n_clusters=n_clusters, random_state=42)
    kmeans.fit(coordinates)
    
    # Assign clusters
    labels = kmeans.labels_
    
    # Organize results
    clusters = []
    for cluster_id in range(n_clusters):
        cluster_points = data_array[labels == cluster_id].tolist()
        clusters.append({
            'cluster_id': cluster_id,
            'points': cluster_points
        })
    
    return clusters

# Example usage
data = [
    ['vm1', 1.0, 2.0],
    ['vm2', 2.0, 3.0],
    ['vm3', 10.0, 10.0],
    ['vm4', 11.0, 11.0]
]

n_clusters = 2
result = cluster_data(data, n_clusters)
print(result)
# for cluster in result:
#     print(f"Cluster {cluster['cluster_id']}: {cluster['points']}")
