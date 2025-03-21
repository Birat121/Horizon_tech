using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class MaterialIssue
{
    public decimal TransId { get; set; }

    public string? Isp { get; set; }

    public DateTime? IssDate { get; set; }

    public string? BranchFrom { get; set; }

    public string? BranchTo { get; set; }

    public string? ProductId { get; set; }

    public decimal? IssQty { get; set; }

    public decimal? IssRate { get; set; }

    public decimal? SaleRate { get; set; }

    public decimal? TotalCost { get; set; }

    public string? EntryBy { get; set; }

    public DateTime? EntryDate { get; set; }

    public string? ModifyBy { get; set; }

    public DateTime? ModifyDate { get; set; }

    public string? Uom { get; set; }

    public decimal? Uomqty { get; set; }

    public string? LocId { get; set; }

    public string? BatchId { get; set; }
}
