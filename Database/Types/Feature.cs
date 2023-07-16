using System.ComponentModel.DataAnnotations;
using System.Globalization;
using System.Text.Json;
using System.Text.Json.Nodes;
using System.Text.Json.Serialization;

namespace MapViewer.Database.Types
{
    public class Feature
    {
#pragma warning disable CS8618 

        [Key]
        [JsonPropertyName("id")]
        public string Id { get; set; }

        [JsonPropertyName("type")]
        public string Type { get; set; }

        [JsonPropertyName("properties"), JsonConverter(typeof(KeepJsonAsStringConverter))]
        public string Properties { get; set; }

        [JsonPropertyName("geometry"), JsonConverter(typeof(KeepJsonAsStringConverter))]
        public string Geometry { get; set; }

#pragma warning restore CS8618
    }
    public class FeatureCollection
    {
        public FeatureCollection(IEnumerable<Feature> features)
        {
            this.Features = features.ToArray();
            this.Type = "FeatureCollection";
        }
        [JsonPropertyName("type")]
        public string Type { get; set; }
        [JsonPropertyName("features")]

        public Feature[] Features { get; set; }
    }
}

public class KeepJsonAsStringConverter : JsonConverter<string>
{
    public override string Read(
        ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using (var jsonDoc = JsonDocument.ParseValue(ref reader))
        {
            return jsonDoc.RootElement.GetRawText();
        }
    }

    public override void Write(Utf8JsonWriter writer, string value, JsonSerializerOptions options)
    {
        writer.WriteRawValue(value);
    }
}