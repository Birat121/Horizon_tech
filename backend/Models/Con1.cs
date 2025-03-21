

namespace backend.Models;

public partial class Con
{
    public decimal TransId { get; set; }

    public string BranchCode { get; set; } = null!;

    public string TransNo { get; set; } = null!;

    public DateTime TransDate { get; set; }

    public string ProdId { get; set; } = null!;

    public string ConsId { get; set; } = null!;

    public decimal ConsQty { get; set; }

    public string Uom { get; set; } = null!;

    public decimal PackQty { get; set; }

    public decimal? PackRate { get; set; }

    public decimal? ItemTotal { get; set; }

    public int? Lvl { get; set; }

    public DateTime EntryDate { get; set; }

    public string? EntryBy { get; set; }

    public string? LocId { get; set; }

    public string? BatchId { get; set; }
}
