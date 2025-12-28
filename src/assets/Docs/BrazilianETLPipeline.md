# Brazilian E-commerce Data ETL Pipeline

## Project Overview

A sophisticated **automated ETL (Extract, Transform, Load) pipeline** designed to process Brazilian e-commerce data at scale. This project demonstrates enterprise-grade data engineering practices using **Databricks Spark** with a **medallion architecture** (Bronze, Silver, Gold layers), coupled with **CI/CD automation** using GitHub Actions.

## Project Demo

<video width="100%" height="auto" controls>
  <source src="/videos/brazilian-etl.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Architecture Overview

### Medallion Architecture Pattern

The pipeline follows a three-layer medallion architecture for data quality and consistency:

#### 1. **Bronze Layer** - Raw Data Ingestion

![Bronze Layer](../../../public/images/etl-bronze.png)

The Bronze layer serves as the initial landing zone for raw, unprocessed data from various sources:

- Direct ingestion of raw e-commerce data
- Schema validation on arrival
- Data lineage tracking for audit trails
- Minimal transformations (partition, compression)

#### 2. **Silver Layer** - Data Transformation & Cleaning

![Silver Layer](../../../public/images/etl-silver.png)

The Silver layer performs critical data quality operations:

- Deduplication and outlier detection
- Data validation and error handling
- Business rule application
- Standardization of formats and units
- Enrichment with reference data
- Data quality metrics calculation

#### 3. **Gold Layer** - Analytics Ready Data

![Gold Layer](../../../public/images/etl-gold.png)

The Gold layer provides optimized, aggregated data for analytics and reporting:

- Pre-aggregated metrics and KPIs
- Dimensional modeling for BI tools
- Performance-optimized storage format
- Business-ready datasets for dashboards
- Real-time reporting support

## Key Features

### 🔧 Technology Stack

- **Apache Spark**: Distributed processing engine for handling 1M+ records
- **Python**: Primary language for data transformation logic
- **Databricks**: Cloud-based platform for Spark jobs and clusters
- **GitHub Actions**: Automated CI/CD pipeline orchestration
- **Git**: Version control and collaboration

### ⚙️ CI/CD Automation

![CI/CD Pipeline](../../../public/images/etl-github-cicd.png)

Streamlined deployment and job management:

- Automated Databricks job deployment on code pushes
- Secure secrets management using GitHub Secrets
- Databricks authentication token management
- Environment-specific configurations
- Automated testing and validation before production
- Rollback capabilities for failed deployments

### 📦 Python Wheel Package

- **Modular Architecture**: Separated concerns for transforms, utilities, and configurations
- **Reusable Components**: Library-style package for data transformation logic
- **Version Control**: Semantic versioning for package releases
- **Dependency Management**: Clean dependency specification and resolution
- **Installation Support**: Easy integration into Databricks clusters and other environments

### 🔐 Security Features

- **Secrets Management**: GitHub Secrets for storing sensitive credentials
- **Databricks Token Rotation**: Regular token refresh and management
- **Access Control**: RBAC integration for data access
- **Audit Logging**: Complete audit trail of transformations
- **Data Encryption**: Encryption at rest and in transit

## Implementation Details

### Data Flow

```
Raw Data Sources
        ↓
    [BRONZE LAYER]
    Raw Data Lake
        ↓
    [SILVER LAYER]
  Cleaned & Validated
        ↓
    [GOLD LAYER]
Analytics Ready Data
        ↓
   BI Tools & Reports
```

### Job Scheduling

![Databricks Jobs](../../../public/images/etl-jobs.png)

- Automated job scheduling using Databricks Workflow
- Dependency management between jobs
- Real-time monitoring and alerting
- Automatic retry with exponential backoff
- Comprehensive logging for debugging

### Performance Metrics

- **Processing Speed**: Handles 1M+ records efficiently
- **ETL Time Reduction**: 30% faster than baseline approaches
- **Data Quality Score**: 99.5%+ accuracy after Silver layer processing
- **Cost Optimization**: Efficient resource utilization with Spark

## Development Workflow

### Local Development

1. Clone the repository
2. Set up Python virtual environment
3. Install dependencies: `pip install -r requirements.txt`
4. Configure local testing environment
5. Run unit tests: `pytest tests/`

### Testing

- **Unit Tests**: Component-level testing for transformations
- **Integration Tests**: End-to-end pipeline validation
- **Data Validation Tests**: Quality checks at each layer
- **Performance Tests**: Benchmark against SLAs

### Deployment Process

1. Code changes pushed to repository
2. GitHub Actions triggers automated tests
3. Build Python wheel package
4. Deploy to Databricks cluster
5. Execute validation jobs
6. Monitor job execution in production

## Configuration Management

### Environment Variables

- `DATABRICKS_HOST`: Databricks workspace URL
- `DATABRICKS_TOKEN`: Secure authentication token
- `CLUSTER_ID`: Target cluster for job execution
- `DATABASE_NAME`: Catalog and schema for data storage

### Job Parameters

```python
job_config = {
    "name": "brazilian-etl-pipeline",
    "cluster_id": "cluster-xxx",
    "spark_python_task": {
        "python_file": "s3://bucket/main.py",
        "parameters": ["--mode", "production"]
    }
}
```

## Repository

**GitHub**: [Santhosh1933/brazilian-data-etl-pipeline](https://github.com/Santhosh1933/brazilian-data-etl-pipeline)

## Key Learnings

- ✅ Building scalable data pipelines with cloud platforms
- ✅ Implementing enterprise data architecture patterns
- ✅ Automating complex data workflows with CI/CD
- ✅ Managing secrets and secure deployments
- ✅ Data quality assurance at scale
- ✅ Cost optimization in cloud data processing

## Future Enhancements

- [ ] Real-time streaming support with Spark Structured Streaming
- [ ] Advanced data quality monitoring with Great Expectations
- [ ] Machine learning model integration for predictive analytics
- [ ] Data lineage visualization with Apache Atlas
- [ ] Multi-cloud deployment support
- [ ] Enhanced monitoring with custom metrics

---

**Project Status**: ✅ Production Ready  
**Last Updated**: December 2024  
**Contact**: [santhoshs19032003@gmail.com](mailto:santhoshs19032003@gmail.com)
