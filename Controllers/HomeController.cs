using MapViewer.Database;
using MapViewer.Database.Types;
using Microsoft.AspNetCore.Mvc;

namespace MapViewer.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : ControllerBase
    {
        private readonly ILogger<HomeController> _logger;
        
        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }
        [HttpGet]
        public object Get()
        {
            return new
            {
                version = "1.0.0"
            };
        }

        [HttpPost("SendFeature")]
        public bool SendFeature([FromBody] Feature feature)
        {
            var context = new MapDbContext();
            var featureForUpdate = context.Features.FirstOrDefault(x => x.Id == feature.Id);
            if(featureForUpdate == null)
            {
                context.Features.Add(feature);
            }
            else
            {
                featureForUpdate.Properties = feature.Properties;
                featureForUpdate.Geometry = feature.Geometry;
            }
            context.SaveChanges();
            return true;
        }

        [HttpPost("DeleteFeature")]
        public bool DeleteFeature([FromBody] string id)
        {
            var context = new MapDbContext();
            var featureForDelete = context.Features.FirstOrDefault(x => x.Id == id);
            if (featureForDelete == null)
                return false;
            context.Features.Remove(featureForDelete);
            context.SaveChanges();
            return true;
        }
        [HttpGet("GetAllFeatures")]
        public Feature[] GetAllFeatures()
        {
            var context = new MapDbContext();
            return context.Features.ToArray();
        }

        [HttpGet("HelloWorld")]
        public string HelloWorld()
        {
            return "Hello, World! =)";
        }
    }
}