using System.Text.Json.Serialization;

namespace MapViewer.Database.Types
{
    public class Feature
    {
        [JsonPropertyName("id")]
        public string Id { get; set; }

        [JsonPropertyName("type")]
        public string Type { get; set; }

        [JsonPropertyName("properties")]
        public Dictionary<string, object> Properties { get; set; }

        [JsonPropertyName("geometry")]
        public Geometry Geometry { get; set; }
    }

    public class Properties
    {
        public string name { get; set; }
        public string value { get; set; }
    }

    public class Geometry
    {
        [JsonPropertyName("coordinates")]
        public float[][][] Coordinates { get; set; }
        [JsonPropertyName("type")]
        public string Type { get; set; }
    }
}
