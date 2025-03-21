using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class ProjectMast
{
    public decimal TransId { get; set; }

    public string? ProjectId { get; set; }

    public string? ProjectName { get; set; }

    public string? Location { get; set; }

    public string? Manager { get; set; }

    public string? ContactNo { get; set; }

    public decimal? EstimateCost { get; set; }

    public DateTime? StartDate { get; set; }

    public DateTime? EndDate { get; set; }

    public string? OtherInfo { get; set; }

    public string? EntryBy { get; set; }

    public DateTime? EntryDate { get; set; }

    public string? ModifyBy { get; set; }

    public DateTime? ModifyDate { get; set; }
}
